import VideoStyleEditing from './videostyle/videostyleediting';
import VideoStyleUI from './videostyle/videostyleui';

const { Plugin } = window.CKEditor5.core;

export default class VideoStyle extends Plugin {
    static get requires() {
        return [ VideoStyleEditing, VideoStyleUI ];
    }

    static get pluginName() {
        return 'VideoStyle';
    }
}
