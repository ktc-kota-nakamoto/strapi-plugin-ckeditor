import VideoLoadObserver from './videoloadobserver';
import InsertVideoCommand from './insertvideocommand';
import VideoUtils from "../videoutils";

const { Plugin } = window.CKEditor5.core;

export default class VideoEditing extends Plugin {
	static get requires() {
		return [ VideoUtils ];
	}

	static get pluginName() {
		return 'VideoEditing';
	}

	init() {
		const editor = this.editor;
		const conversion = editor.conversion;

		editor.editing.view.addObserver( VideoLoadObserver );

		conversion.for( 'upcast' )
			.attributeToAttribute( {
					view: {
						name: 'video',
						key: 'src'
					},
					model: {
						key: 'src',
						value: viewVideo => {
							const value = {
								data: viewVideo.getAttribute( 'src' )
							};

							if ( viewVideo.hasAttribute( 'width' ) ) {
								value.width = viewVideo.getAttribute( 'width' );
							}

							return value;
						}
					}
				} );

		const insertVideoCommand = new InsertVideoCommand( editor );
		editor.commands.add( 'insertVideo', insertVideoCommand );
		editor.commands.add( 'videoInsert', insertVideoCommand );
	}
}
