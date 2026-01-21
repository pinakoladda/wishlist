import { Input } from '@/components/ui/input'
import styles from './index.module.css'
import { Label } from '@radix-ui/react-label'

export default function Settings() {
    return (
        <main className={styles.settings}>
            <h2 className={styles.header}>Settings</h2>
            <section>
                <Label />
                <Input />
            </section>
        </main>
    )
}
