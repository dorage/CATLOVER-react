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

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        try {
            const detail = await serverApi.postDetail(id);
            this.setState({ detail });
            console.log(detail.data.results);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { detail, loading, error } = this.state;
        return <DetailPresenter />;
    }
}
