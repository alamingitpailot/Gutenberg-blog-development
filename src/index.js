import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	title: __("Test Block two", "test-block"),
	icon: {
		src: 'admin-appearance',
		background: "red",
		foreground:'white'
	},
	category: 'MyBlock',
	description: "This is my test block",
	keywords:[__('test'),__('test-block'),__('block')],
	edit: function (props) {
		return ( <div className="className">
			<h1>Hello</h1>
		</div> )
	},
	save: function (props) {
		return ( <div className="className">
					<h1>Hello Al-Amin</h1>
				</div> )
	}
} );
