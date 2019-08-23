import React from 'react';
import RankingPresenter from './RankingPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        results: null,
        girlRank: false,
        loading: true,
        error: false
    };

    async componentDidMount() {
        try {
            const {
                data: { results }
            } = await serverApi.totalRank();
            this.setState({ results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    isGirlRank = girlRank => {
        this.setState({ girlRank });
    };

    render() {
        const { girlRank, results, loading, error } = this.state;
        return (
            <RankingPresenter
                girlRank={girlRank}
                results={results}
                loading={loading}
                error={error}
                isGirlRank={this.isGirlRank}
            ></RankingPresenter>
        );
    }
}
