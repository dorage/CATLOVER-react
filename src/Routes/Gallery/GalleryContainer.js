import React from 'react';
import GalleryPresenter from './GalleryPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        todayPick: null,
        tags: null,
        error: false,
        loading: true
    };

    async componentDidMount() {
        try {
            const {
                data: {
                    results: { todayPick }
                }
            } = await serverApi.todayPick();

            const {
                data: {
                    results: { tags }
                }
            } = await serverApi.tags();
            this.setState({ todayPick, tags, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { todayPick, tags, loading, error } = this.state;
        return (
            <GalleryPresenter
                todayPick={todayPick}
                tags={tags}
                loading={loading}
                error={error}
            />
        );
    }
}
