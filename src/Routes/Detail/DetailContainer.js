import React from 'react';
import DetailPresenter from './DetailPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            results: null,
            loading: true,
            error: false
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        try {
            const {
                data: { results }
            } = await serverApi.postDetail(id);
            this.setState({ id, results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { id, results, loading, error } = this.state;
        return (
            <DetailPresenter
                id={id}
                results={results}
                loading={loading}
                error={error}
            />
        );
    }
}
