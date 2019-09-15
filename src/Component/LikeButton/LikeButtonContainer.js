import React from 'react';
import LikeButtonPresenter from './LikeButtonPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = { like: 0, isLike: false, error: false };

    componentDidUpdate = async () => {
        const { type, id, tokenId } = this.props;
        try {
            let results;
            if (type === 'post') {
                results = await serverApi.getPostLike(id, tokenId);
            } else if (type === 'girl') {
                results = await serverApi.getGirlLike(id, tokenId);
            }
            this.setState({
                like: results.data.like,
                isLike: results.data.isLike
            });
        } catch (e) {
            this.setState({ error: true });
        }
    };

    setLike = async () => {
        const { type, id, tokenId } = this.props;
        try {
            let results;
            if (type === 'post') {
                results = await serverApi.postPostLike(id, tokenId);
            } else if (type === 'girl') {
                results = await serverApi.postGirlLike(id, tokenId);
            }
            this.setState({
                like: results.data.like,
                isLike: results.data.isLike
            });
        } catch (e) {
            this.setState({ error: true });
        }
    };

    render() {
        const { like, isLike } = this.state;
        const { tokenId } = this.props;
        return (
            <LikeButtonPresenter
                like={like}
                tokenId={tokenId}
                isLike={isLike}
                setLike={this.setLike}
            />
        );
    }
}
