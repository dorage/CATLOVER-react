import React from 'react';
import GirlPresenter from './GirlPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        id: '',
        results: null,
        loading: true,
        error: false
    };

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        try {
            const {
                data: { results }
            } = await serverApi.girlDetail(id);
            this.setState({ id, results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { id, results, loading, error } = this.state;
        console.log(results);
        return (
            <GirlPresenter
                id={id}
                results={results}
                loading={loading}
                error={error}
            />
        );
    }
}
