import { type PluginUtils } from 'tailwindcss/types/config'

export default function typographyStyles({ theme }: PluginUtils) {
  return {
    invert: {
      css: {
        '--tw-pteal-body': 'var(--tw-pteal-invert-body)',
        '--tw-pteal-headings': 'var(--tw-pteal-invert-headings)',
        '--tw-pteal-links': 'var(--tw-pteal-invert-links)',
        '--tw-pteal-links-hover': 'var(--tw-pteal-invert-links-hover)',
        '--tw-pteal-underline': 'var(--tw-pteal-invert-underline)',
        '--tw-pteal-underline-hover': 'var(--tw-pteal-invert-underline-hover)',
        '--tw-pteal-bold': 'var(--tw-pteal-invert-bold)',
        '--tw-pteal-counters': 'var(--tw-pteal-invert-counters)',
        '--tw-pteal-bullets': 'var(--tw-pteal-invert-bullets)',
        '--tw-pteal-hr': 'var(--tw-pteal-invert-hr)',
        '--tw-pteal-quote-borders': 'var(--tw-pteal-invert-quote-borders)',
        '--tw-pteal-captions': 'var(--tw-pteal-invert-captions)',
        '--tw-pteal-code': 'var(--tw-pteal-invert-code)',
        '--tw-pteal-code-bg': 'var(--tw-pteal-invert-code-bg)',
        '--tw-pteal-pre-code': 'var(--tw-pteal-invert-pre-code)',
        '--tw-pteal-pre-bg': 'var(--tw-pteal-invert-pre-bg)',
        '--tw-pteal-pre-border': 'var(--tw-pteal-invert-pre-border)',
        '--tw-pteal-th-borders': 'var(--tw-pteal-invert-th-borders)',
        '--tw-pteal-td-borders': 'var(--tw-pteal-invert-td-borders)',
      },
    },
    DEFAULT: {
      css: {
        '--tw-pteal-body': theme('colors.zinc.600'),
        '--tw-pteal-headings': theme('colors.zinc.900'),
        '--tw-pteal-links': theme('colors.teal.500'),
        '--tw-pteal-links-hover': theme('colors.teal.600'),
        '--tw-pteal-underline': theme('colors.teal.500 / 0.2'),
        '--tw-pteal-underline-hover': theme('colors.teal.500'),
        '--tw-pteal-bold': theme('colors.zinc.900'),
        '--tw-pteal-counters': theme('colors.zinc.900'),
        '--tw-pteal-bullets': theme('colors.zinc.900'),
        '--tw-pteal-hr': theme('colors.zinc.100'),
        '--tw-pteal-quote-borders': theme('colors.zinc.200'),
        '--tw-pteal-captions': theme('colors.zinc.400'),
        '--tw-pteal-code': theme('colors.zinc.700'),
        '--tw-pteal-code-bg': theme('colors.zinc.300 / 0.2'),
        '--tw-pteal-pre-code': theme('colors.zinc.100'),
        '--tw-pteal-pre-bg': theme('colors.zinc.900'),
        '--tw-pteal-pre-border': 'transparent',
        '--tw-pteal-th-borders': theme('colors.zinc.200'),
        '--tw-pteal-td-borders': theme('colors.zinc.100'),

        '--tw-pteal-invert-body': theme('colors.zinc.400'),
        '--tw-pteal-invert-headings': theme('colors.zinc.200'),
        '--tw-pteal-invert-links': theme('colors.teal.400'),
        '--tw-pteal-invert-links-hover': theme('colors.teal.400'),
        '--tw-pteal-invert-underline': theme('colors.teal.400 / 0.3'),
        '--tw-pteal-invert-underline-hover': theme('colors.teal.400'),
        '--tw-pteal-invert-bold': theme('colors.zinc.200'),
        '--tw-pteal-invert-counters': theme('colors.zinc.200'),
        '--tw-pteal-invert-bullets': theme('colors.zinc.200'),
        '--tw-pteal-invert-hr': theme('colors.zinc.700 / 0.4'),
        '--tw-pteal-invert-quote-borders': theme('colors.zinc.500'),
        '--tw-pteal-invert-captions': theme('colors.zinc.500'),
        '--tw-pteal-invert-code': theme('colors.zinc.300'),
        '--tw-pteal-invert-code-bg': theme('colors.zinc.200 / 0.05'),
        '--tw-pteal-invert-pre-code': theme('colors.zinc.100'),
        '--tw-pteal-invert-pre-bg': 'rgb(0 0 0 / 0.4)',
        '--tw-pteal-invert-pre-border': theme('colors.zinc.200 / 0.1'),
        '--tw-pteal-invert-th-borders': theme('colors.zinc.700'),
        '--tw-pteal-invert-td-borders': theme('colors.zinc.800'),

        // Base
        color: 'var(--tw-pteal-body)',
        lineHeight: theme('lineHeight.7'),
        '> *': {
          marginTop: theme('spacing.10'),
          marginBottom: theme('spacing.10'),
        },
        p: {
          marginTop: theme('spacing.7'),
          marginBottom: theme('spacing.7'),
        },

        // Headings
        'h2, h3': {
          color: 'var(--tw-pteal-headings)',
          fontWeight: theme('fontWeight.semibold'),
        },
        h2: {
          fontSize: theme('fontSize.xl')[0],
          lineHeight: theme('lineHeight.7'),
          marginTop: theme('spacing.20'),
          marginBottom: theme('spacing.4'),
        },
        h3: {
          fontSize: theme('fontSize.base')[0],
          lineHeight: theme('lineHeight.7'),
          marginTop: theme('spacing.16'),
          marginBottom: theme('spacing.4'),
        },
        ':is(h2, h3) + *': {
          marginTop: 0,
        },

        // Images
        img: {
          borderRadius: theme('borderRadius.3xl'),
        },

        // Inline elements
        a: {
          color: 'var(--tw-pteal-links)',
          fontWeight: theme('fontWeight.semibold'),
          textDecoration: 'underline',
          textDecorationColor: 'var(--tw-pteal-underline)',
          transitionProperty: 'color, text-decoration-color',
          transitionDuration: theme('transitionDuration.150'),
          transitionTimingFunction: theme('transitionTimingFunction.in-out'),
        },
        'a:hover': {
          color: 'var(--tw-pteal-links-hover)',
          textDecorationColor: 'var(--tw-pteal-underline-hover)',
        },
        strong: {
          color: 'var(--tw-pteal-bold)',
          fontWeight: theme('fontWeight.semibold'),
        },
        code: {
          display: 'inline-block',
          color: 'var(--tw-pteal-code)',
          fontSize: theme('fontSize.sm')[0],
          fontWeight: theme('fontWeight.semibold'),
          backgroundColor: 'var(--tw-pteal-code-bg)',
          borderRadius: theme('borderRadius.lg'),
          paddingLeft: theme('spacing.1'),
          paddingRight: theme('spacing.1'),
        },
        'a code': {
          color: 'inherit',
        },
        ':is(h2, h3) code': {
          fontWeight: theme('fontWeight.bold'),
        },

        // Quotes
        blockquote: {
          paddingLeft: theme('spacing.6'),
          borderLeftWidth: theme('borderWidth.2'),
          borderLeftColor: 'var(--tw-pteal-quote-borders)',
          fontStyle: 'italic',
        },

        // Figures
        figcaption: {
          color: 'var(--tw-pteal-captions)',
          fontSize: theme('fontSize.sm')[0],
          lineHeight: theme('lineHeight.6'),
          marginTop: theme('spacing.3'),
        },
        'figcaption > p': {
          margin: 0,
        },

        // Lists
        ul: {
          listStyleType: 'disc',
        },
        ol: {
          listStyleType: 'decimal',
        },
        'ul, ol': {
          paddingLeft: theme('spacing.6'),
        },
        li: {
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.6'),
          paddingLeft: theme('spacing[3.5]'),
        },
        'li::marker': {
          fontSize: theme('fontSize.sm')[0],
          fontWeight: theme('fontWeight.semibold'),
        },
        'ol > li::marker': {
          color: 'var(--tw-pteal-counters)',
        },
        'ul > li::marker': {
          color: 'var(--tw-pteal-bullets)',
        },
        'li :is(ol, ul)': {
          marginTop: theme('spacing.4'),
          marginBottom: theme('spacing.4'),
        },
        'li :is(li, p)': {
          marginTop: theme('spacing.3'),
          marginBottom: theme('spacing.3'),
        },

        // Code blocks
        pre: {
          color: 'var(--tw-pteal-pre-code)',
          fontSize: theme('fontSize.sm')[0],
          fontWeight: theme('fontWeight.medium'),
          backgroundColor: 'var(--tw-pteal-pre-bg)',
          borderRadius: theme('borderRadius.3xl'),
          padding: theme('spacing.8'),
          overflowX: 'auto',
          border: '1px solid',
          borderColor: 'var(--tw-pteal-pre-border)',
        },
        'pre code': {
          display: 'inline',
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          backgroundColor: 'transparent',
          borderRadius: 0,
          padding: 0,
        },

        // Horizontal rules
        hr: {
          marginTop: theme('spacing.20'),
          marginBottom: theme('spacing.20'),
          borderTopWidth: '1px',
          borderColor: 'var(--tw-pteal-hr)',
          '@screen lg': {
            marginLeft: `calc(${theme('spacing.12')} * -1)`,
            marginRight: `calc(${theme('spacing.12')} * -1)`,
          },
        },

        // Tables
        table: {
          width: '100%',
          tableLayout: 'auto',
          textAlign: 'left',
          fontSize: theme('fontSize.sm')[0],
        },
        thead: {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-pteal-th-borders)',
        },
        'thead th': {
          color: 'var(--tw-pteal-headings)',
          fontWeight: theme('fontWeight.semibold'),
          verticalAlign: 'bottom',
          paddingBottom: theme('spacing.2'),
        },
        'thead th:not(:first-child)': {
          paddingLeft: theme('spacing.2'),
        },
        'thead th:not(:last-child)': {
          paddingRight: theme('spacing.2'),
        },
        'tbody tr': {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-pteal-td-borders)',
        },
        'tbody tr:last-child': {
          borderBottomWidth: 0,
        },
        'tbody td': {
          verticalAlign: 'baseline',
        },
        tfoot: {
          borderTopWidth: '1px',
          borderTopColor: 'var(--tw-pteal-th-borders)',
        },
        'tfoot td': {
          verticalAlign: 'top',
        },
        ':is(tbody, tfoot) td': {
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
        },
        ':is(tbody, tfoot) td:not(:first-child)': {
          paddingLeft: theme('spacing.2'),
        },
        ':is(tbody, tfoot) td:not(:last-child)': {
          paddingRight: theme('spacing.2'),
        },
      },
    },
  }
}
