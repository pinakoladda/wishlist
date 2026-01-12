'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { HeaderPublic } from '@/components/HeaderPublic'
import styles from './index.module.css'
import { useSignIn } from './hooks/useSignIn'
import { ErrorMessage } from '@/components/ErrorMessage'
import Link from 'next/link'

import { messages } from './index.intl'
import { FormattedMessage } from 'react-intl'

const renderHighlight = (chunks: React.ReactNode[]) => <span>{chunks}</span>

const renderLink = (chunks: React.ReactNode[]) => (
    <Link href="/sign-up" className={styles.link}>
        {chunks}
    </Link>
)

export default function SignIn() {
    const { fields, onSubmit, errorMessage } = useSignIn()

    return (
        <main>
            <HeaderPublic />
            <Card className={styles.card}>
                <CardHeader>
                    <CardTitle className="text-center">
                        <FormattedMessage
                            {...messages.title}
                            values={{ hl: renderHighlight }}
                        />
                    </CardTitle>
                </CardHeader>
                <form onSubmit={onSubmit}>
                    <CardContent className={'flex flex-col gap-4'}>
                        <Label htmlFor="email">Enter your email:</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...fields.email}
                        />
                        <Label htmlFor="password">Enter your password:</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...fields.password}
                        />
                    </CardContent>
                    <ErrorMessage errorMessage={errorMessage} />

                    <p className={styles.paragraph}>
                        <FormattedMessage
                            {...messages.dontHaveAccount}
                            values={{ a: renderLink }}
                        />
                    </p>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </main>
    )
}
