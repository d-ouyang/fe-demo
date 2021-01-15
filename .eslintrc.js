// 更详细的配置文档请参考：https://github.com/vuejs/eslint-plugin-vue#gear-configs
module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'plugins': [
		'html'
	],
	'extends': [
		// "eslint:recommended",
		'plugin:vue/base'
	],
	'parserOptions': {
		'parser': 'babel-eslint',
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'globals': {
			'uni': 'readonly',
			'wx': 'readonly',
			'getCurrentPages': 'readonly'
	},
	'rules': {
		// 在computed properties中禁用异步actions
		'vue/no-async-in-computed-properties': 'error',
		// 不允许重复的keys
		'vue/no-dupe-keys': 'error',
		// 不允许重复的attributes
		'vue/no-duplicate-attributes': 'warn',
		// 在 <template> 标签下不允许解析错误
		'vue/no-parsing-error': ['error', {
			'x-invalid-end-tag': false
		}],
		// 不允许覆盖保留关键字
		'vue/no-reserved-keys': 'error',
		// 强制data必须是一个带返回值的函数
		// 'vue/no-shared-component-data': 'error',
		// 不允许在computed properties中出现副作用。
		'vue/no-side-effects-in-computed-properties': 'error',
		// <template>不允许key属性
		'vue/no-template-key': 'warn',
		// 在 <textarea> 中不允许mustaches
		'vue/no-textarea-mustache': 'error',
		// 不允许在v-for或者范围内的属性出现未使用的变量定义
		'vue/no-unused-vars': 'warn',
		// <component>标签需要v-bind:is属性
		'vue/require-component-is': 'error',
		// render 函数必须有一个返回值
		'vue/require-render-return': 'error',
		// 保证 v-bind:key 和 v-for 指令成对出现
		'vue/require-v-for-key': 'error',
		// 检查默认的prop值是否有效
		'vue/require-valid-default-prop': 'error',
		// 保证computed属性中有return语句
		'vue/return-in-computed-property': 'error',
		// 强制校验 template 根节点
		'vue/valid-template-root': 'error',
		// 强制校验 v-bind 指令
		'vue/valid-v-bind': 'error',
		// 强制校验 v-cloak 指令
		'vue/valid-v-cloak': 'error',
		// 强制校验 v-else-if 指令
		'vue/valid-v-else-if': 'error',
		// 强制校验 v-else 指令
		'vue/valid-v-else': 'error',
		// 强制校验 v-for 指令
		'vue/valid-v-for': 'error',
		// 强制校验 v-html 指令
		'vue/valid-v-html': 'error',
		// 强制校验 v-if 指令
		'vue/valid-v-if': 'error',
		// 强制校验 v-model 指令
		'vue/valid-v-model': 'error',
		// 强制校验 v-on 指令
		'vue/valid-v-on': 'error',
		// 强制校验 v-once 指令
		'vue/valid-v-once': 'error',
		// 强制校验 v-pre 指令
		'vue/valid-v-pre': 'error',
		// 强制校验 v-show 指令
		'vue/valid-v-show': 'error',
		// 强制校验 v-text 指令
		'vue/valid-v-text': 'error',
		'vue/comment-directive': 0,
		'semi': ['error', 'always', {
			'omitLastInOneLineBlock': true
		}],
		'no-multi-spaces': 'error',
		// 箭头函数中，在需要的时候，在参数外使用小括号（只有一个参数时，可以不适用括号，其它情况下都需要使用括号）
		'arrow-parens': [
			2,
			'as-needed'
		],
		// 箭头函数中的箭头前后需要留空格
		'arrow-spacing': [
			2,
			{
				'before': true,
				'after': true
			}
		],
		// 如果代码块是单行的时候，代码块内部前后需要留一个空格
		'block-spacing': [
			2,
			'always'
		],
		// 大括号语法采用『1tbs』,允许单行样式
		'brace-style': [
			2,
			'1tbs',
			{
				'allowSingleLine': true
			}
		],
		/**
		 *该规则会搜索代码中所有的下划线，它会忽略变量名开始和结尾的下划线而只检测变量中间的下划线。
		 *如果ESLint认为一个变量是常量（所有字母大写），那么在变量名字母之间添加下划线也是可以而不会报错的。
		 *该规则只检测生命和定义时的变量而不检测函数调用时的函数名。
		 **/
		'camelcase': [
			2,
			{
				'properties': 'never'
			}
		],
		// 在定义对象或数组时，最后一项不能加逗号
		'comma-dangle': [
			2,
			'never'
		],
		// 在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
		'comma-spacing': [
			2,
			{
				'before': false,
				'after': true
			}
		],
		// 如果逗号可以放在行首或行尾时，那么请放在行尾
		'comma-style': [
			2,
			'last'
		],
		// 该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
		'key-spacing': [
			2,
			{
				'beforeColon': false,
				'afterColon': true
			}
		],
		// 在constructor函数中，如果classes是继承其他class，那么请使用super。否者不使用super
		'constructor-super': 2,
		// 在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
		'curly': [
			2,
			'multi-line'
		],
		// keyword 前后需要空格
		'keyword-spacing': [
			2,
			{
				'before': true,
				'after': true,
				'overrides': {}
			}
		],
		// 构造函数首字母大写
		'new-cap': [
			2,
			{
				'newIsCap': true,
				'capIsNew': false
			}
		],
		'no-multi-spaces': 2,
		// 该规则保证了字符串不分两行书写。
		'no-multi-str': 2,
		// 空行不能够超过2行
		'no-multiple-empty-lines': [
			2,
			{
				'max': 2
			}
		],
		// 不要重复申明一个变量
		'no-redeclare': 1,
		// 正则表达式中不要使用空格
		'no-regex-spaces': 2,
		// 禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
		'no-shadow-restricted-names': 2,
		// 函数调用时，圆括号前面不能有空格
		'no-spaced-func': 2,
		// 行末禁止加空格
		'no-trailing-spaces': 2,
		// 使用单引号
		'quotes': [
			1,
			'single',
			'avoid-escape'
		],
		// 该规则规定了分号前后的空格，具体规定如下。
		'semi-spacing': [
			2,
			{
				'before': false,
				'after': true
			}
		],
		// 代码块前面需要加空格
		'space-before-blocks': [
			2,
			'always'
		],
		// 函数圆括号前面需要加空格
		'space-before-function-paren': [
			2,
			'never'
		],
		// 圆括号内部不需要加空格
		'space-in-parens': [
			2,
			'never'
		],
		// 操作符前后需要加空格
		'space-infix-ops': 2,
		// 一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
		'space-unary-ops': [
			2,
			{
				'words': true,
				'nonwords': false
			}
		],
		// 评论符号｀／*｀ ｀／／｀，后面需要留一个空格
		'spaced-comment': [
			2,
			'always',
			{
				'markers': [
					'global',
					'globals',
					'eslint',
					'eslint-disable',
					'*package',
					'!',
					','
				]
			}
		],
		// 立即执行函数需要用圆括号包围
		'wrap-iife': [
			2,
			'any'
		],
		// 推荐使用isNaN方法，而不要直接和NaN作比较
		'use-isnan': 2,
		// 在使用typeof操作符时，作比较的字符串必须是合法字符串eg:'string' 'object'
		'valid-typeof': 2
	}
};
