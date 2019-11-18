import React from 'react';
import GirlPresenter from './GirlPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        id: '',
        page: 1,
        results: null,
        loading: true,
        error: false
    };

    handleScroll = async () => {
        // 스크롤 끝인식
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) {
            return;
        }

        const {
            match: {
                params: { id }
            }
        } = this.props;
        const { results, page } = this.state;

        try {
            const {
                data: { results: newResults, endOfPage }
            } = await serverApi.girlDetail(id, page + 1);
            // 더이상 불러올게 없을때
            if (endOfPage) {
                return;
            }
            const concatResults = results.post.concat(newResults.post);
            results.post = concatResults;
            this.setState({ results, page: page + 1 });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    };

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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
