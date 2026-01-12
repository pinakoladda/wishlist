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
import { useSignUp } from './hooks/useSignUp'
import { ErrorMessage } from '@/components/ErrorMessage'

export default function SignUp() {
    const { fields, onSubmit, errorMessage } = useSignUp()
    return (
        <main>
            <HeaderPublic />
            <form onSubmit={onSubmit}>
                <Card className={styles.card}>
                    <CardHeader>
                        <CardTitle className="text-center">
                            Create your account:
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <Label htmlFor="name">Name:</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Name"
                            {...fields.name}
                        />

                        <Label htmlFor="login">Login:</Label>
                        <Input
                            id="login"
                            type="text"
                            placeholder="login"
                            {...fields.userName}
                        />

                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                            id="dateOfBirth"
                            type="date"
                            {...fields.dateOfBirth}
                        />

                        <Label htmlFor="email">Email:</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...fields.email}
                        />

                        <Label htmlFor="password">Create your password:</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...fields.password}
                        />
                        <Label htmlFor="repeatPassword">
                            Repeat your password:
                        </Label>
                        <Input
                            id="repeatPassword"
                            type="password"
                            placeholder="Password"
                            {...fields.repeatPassword}
                        />
                    </CardContent>
                    <ErrorMessage errorMessage={errorMessage} />
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </main>
    )
}
