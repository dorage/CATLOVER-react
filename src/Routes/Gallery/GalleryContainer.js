import React from 'react';
import GalleryPresenter from './GalleryPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    state = {
        top20: null,
        error: false,
        loading: true
    };

    async componentDidMount() {
        try {
            const {
                data: {
                    results: { top20 }
                }
            } = await serverApi.top20();
            this.setState({ top20, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { top20, loading, error } = this.state;
        return (
            <GalleryPresenter top20={top20} loading={loading} error={error} />
        );
    }
}
