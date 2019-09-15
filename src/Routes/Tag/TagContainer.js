import React from 'react';
import TagPresenter from './TagPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        name: '',
        page: 0,
        pics: 20,
        results: null,
        endOfResults: false,
        loading: true,
        error: false
    };

    handleScroll = () => {
        // 스크롤 끝인식
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        ) {
            console.log('scroll!');
            return;
        }
        const { pics, page } = this.state;
        // fetch from api server
        // set results in state
        this.setState({ pics: pics + 20, page: page + 1 });
        console.log('end of page');
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
