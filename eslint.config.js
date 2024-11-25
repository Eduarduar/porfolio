import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import standard from 'eslint-config-standard'
import standardWithTypescript from 'eslint-config-standard-with-typescript'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      standard,
      standardWithTypescript // Agrega reglas de TypeScript de Standard
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // Reglas recomendadas de react-hooks
      ...reactHooks.configs.recommended.rules,
      // Reglas personalizadas de Standard
      ...standard.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Opcional: Sobrescribir o añadir reglas específicas
      semi: ['error', 'never'], // Ejemplo: Desactivar punto y coma
      'comma-dangle': ['error', 'never'] // Sin comas finales
    }
  }
)
