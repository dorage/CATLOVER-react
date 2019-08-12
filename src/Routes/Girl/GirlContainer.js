import React from 'react';
import GirlPresenter from './GirlPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
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
            console.log(results.girl);
            this.setState({ results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        return <GirlPresenter></GirlPresenter>;
    }
}
