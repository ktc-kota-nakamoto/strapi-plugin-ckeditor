import VideoUtils from './videoutils';
import { isObject } from 'lodash-es';

const { Plugin } = window.CKEditor5.core;
const { WidgetToolbarRepository } = window.CKEditor5.widget;

export default class VideoToolbar extends Plugin {
    static get requires() {
        return [ WidgetToolbarRepository, VideoUtils ];
    }

    static get pluginName() {
        return 'VideoToolbar';
    }

    afterInit() {
        const editor = this.editor;
        const t = editor.t;
        const widgetToolbarRepository = editor.plugins.get( WidgetToolbarRepository );
        const videoUtils = editor.plugins.get( 'VideoUtils' );

        widgetToolbarRepository.register( 'video', {
            ariaLabel: t( 'Video toolbar' ),
            items: normalizeDeclarativeConfig( editor.config.get( 'video.toolbar' ) || [] ),
            getRelatedElement: selection => videoUtils.getClosestSelectedVideoWidget( selection )
        } );
    }
}

function normalizeDeclarativeConfig( config ) {
    return config.map( item => isObject( item ) ? item.name : item );
}

