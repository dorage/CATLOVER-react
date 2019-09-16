import React from 'react';
import TagPresenter from './TagPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        name: '',
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
            console.log('scroll!');
            return;
        }

        const { name, results, page } = this.state;

        try {
            const {
                data: { results: newResults, endOfPage }
            } = await serverApi.getTagDetail(name, page + 1);
            console.log(newResults);
            // 더이상 불러올게 없을때
            if (endOfPage) {
                console.log(endOfPage);
                return;
            }
            const concatResults = results.posts.concat(newResults.posts);
            results.posts = concatResults;
            this.setState({ results, page: page + 1 });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    };

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        try {
            const {
                match: {
                    params: { id: name }
                }
            } = this.props;
            const {
                data: { results }
            } = await serverApi.getTagDetail(name);
            this.setState({ name, results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { name, page, pics, results, endOfResults, loading } = this.state;
        return (
            <TagPresenter
                name={name}
                page={page}
                pics={pics}
                results={results}
                endOfResults={endOfResults}
                loading={loading}
            />
        );
    }
}
