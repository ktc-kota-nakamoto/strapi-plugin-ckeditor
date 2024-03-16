import VideoInlineEditing from './video/videoinlineediting';
import './theme/video.css';

const { Plugin } = window.CKEditor5.core;
const { Widget } = window.CKEditor5.widget;

export default class VideoInline extends Plugin {
    static get requires() {
        return [ VideoInlineEditing, Widget ];
    }

    static get pluginName() {
        return 'VideoInline';
    }
}
