import VideoBlock from './videoblock';
import VideoInline from './videoinline';
import './theme/video.css';

const { Plugin } = window.CKEditor5.core;

export default class Video extends Plugin {
    static get requires() {
        return [ VideoBlock, VideoInline];
    }

    static get pluginName() {
        return 'Video';
    }
}
