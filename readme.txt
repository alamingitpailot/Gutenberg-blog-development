 

## Gutenberg Block Development Basic Concept
### কি ভাবে ব্লক Custom Category Add করবো 
#### নিচে Code গুলি দেখি 
```
add_filter('block_categories','custom_categories',10,2);
// categories add block 
function custom_categories($cat,$post) {

	if('page' !== get_post_type($post)){
		return $cat;
	}

	return array_merge($cat,array(
		array(
			'slug' => 'MyBlock',
			'title' => 'Custom MyBlock'
		)));
}

```



