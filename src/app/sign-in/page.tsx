import { Button } from '@/components/ui/button'
import styles from './index.module.css'
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

export default function SignIn() {
    return (
        <main>
            <Header />
            <Card className={styles.card}>
                <CardHeader>
                    <CardTitle className="text-center">
                        Sign-in to your account
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Label htmlFor="email">Enter your email:</Label>
                    <Input id="email" type="email" placeholder="Email" />
                    <Label htmlFor="password">Enter your password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}
