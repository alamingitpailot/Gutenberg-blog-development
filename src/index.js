import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __("Test Block two", "test-block"),
	icon: {
		src: 'admin-appearance',
		background: "blue",
		foreground:'white'
	},
	category: 'MyBlock',
	description: "This is my test block",
	keywords: [__('test'), __('test-block'), __('block')],
	supports: {
		align: ['left', 'right', 'center'],
		anchor: true,
		customClassName:false
	},
	edit: function (props) {

		console.log(useBlockProps());
		return (<div {...useBlockProps()}>
			<h1>alamin</h1>
		</div> );
	},
	save: save,
} );
