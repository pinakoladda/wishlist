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
import { Header } from '@/components/Header'
import styles from './index.module.css'
import { useSignIn } from './hooks/useSignIn'
import { ErrorMessage } from '@/components/ErrorMeassage'
import Link from 'next/link'

export default function SignIn() {
    const { fields, onSubmit, errorMessage } = useSignIn()
    return (
        <main>
            <Header />
            <Card className={styles.card}>
                <CardHeader>
                    <CardTitle className="text-center">
                        Sign-in to your account
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
                        Still don`t have an account?
                        <Link href="/sign-up" className={styles.link}>
                            Let`s make one!
                        </Link>
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
