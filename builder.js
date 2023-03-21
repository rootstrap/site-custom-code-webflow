const { globSync } = require('glob')

require('esbuild')
	.build(
		{
			entryPoints: globSync('./src/**/*.ts', { ignore: 'node_modules/**' }),
			bundle: true,
			minify: true,
			sourcemap: true,
			outdir: './dist'
		}
	)
	.catch(() => process.exit(1))