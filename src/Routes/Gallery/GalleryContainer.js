import React from 'react';
import TestDB from '../../db';
import Poster from '../../Component/Poster';
import GalleryPresenter from './GalleryPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        top20: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const {
                data: { results: top20 }
            } = await serverApi.top20();
            this.setState({ top20, loading: false });
        } catch (e) {
            this.setState({ error: 'error!' });
        }
    }

    render() {
        const { top20, loading, error } = this.state;
        return (
            <GalleryPresenter top20={top20} loading={loading} error={error} />
        );
    }
}
