import React from 'react';
import DetailPresenter from './DetailPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            loading: true,
            error: null
        };
    }

    like() {}

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        try {
            const {
                data: { results: detail }
            } = await serverApi.postDetail(id);
            this.setState({ detail, loading: false });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { detail, loading, error } = this.state;
        console.log(this.state);
        return (
            <DetailPresenter detail={detail} loading={loading} error={error} />
        );
    }
}
