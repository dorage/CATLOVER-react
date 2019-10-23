import React from 'react';
import LikeButtonPresenter from './LikeButtonPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = { like: 0, isLike: false, error: false };

    componentDidUpdate = async () => {
        const { type, id, user } = this.props;
        try {
            let results;
            if (type === 'post') {
                results = await serverApi.getPostLike(id, user.id);
            } else if (type === 'girl') {
                results = await serverApi.getGirlLike(id, user.id);
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
        const { type, id, user } = this.props;
        try {
            let results;
            if (type === 'post') {
                results = await serverApi.postPostLike(id, user.id);
            } else if (type === 'girl') {
                results = await serverApi.postGirlLike(id, user.id);
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
        const { user } = this.props;
        return (
            <LikeButtonPresenter
                like={like}
                user={user}
                isLike={isLike}
                setLike={this.setLike}
            />
        );
    }
}
