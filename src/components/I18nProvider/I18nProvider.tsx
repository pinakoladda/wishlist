'use client'
import { IntlProvider } from 'react-intl'

export const I18nProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    const usersLocale = 'en'

    return (
        <>
            <IntlProvider locale={usersLocale}>{children}</IntlProvider>
        </>
    )
}
