import VideoBlockEditing from './video/videoblockediting';
import './theme/video.css';

const { Plugin } = window.CKEditor5.core;
const { Widget } = window.CKEditor5.widget;

export default class VideoBlock extends Plugin {
    static get requires() {
        return [ VideoBlockEditing, Widget ];
    }

    static get pluginName() {
        return 'VideoBlock';
    }
}
