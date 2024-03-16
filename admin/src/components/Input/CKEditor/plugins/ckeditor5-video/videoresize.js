import VideoResizeEditing from "./videoresize/videoresizeediting";
import VideoResizeHandles from "./videoresize/videoresizehandles";
import VideoResizeButtons from "./videoresize/videoresizebuttons";
import './theme/videoresize.css';

const { Plugin } = window.CKEditor5.core;

export default class VideoResize extends Plugin {
    static get requires() {
        return [ VideoResizeEditing, VideoResizeHandles, VideoResizeButtons ];
    }

    static get pluginName() {
        return 'VideoResize';
    }
}
