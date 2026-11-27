import { GithubIcon } from '@/components/icons/lucide-github'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useAuthSignIn } from '../hooks'

export function SignInLeftSide() {
  const { socialSignIn } = useAuthSignIn()

  return (
    <div className="p-6 lg:p-16 my-auto">
      <div className="flex flex-col gap-6 max-w-115">
        <h1 className="font-medium text-balance leading-none m-0 tracking-[-0.048em] text-[clamp(40px,5vw,60px)]">
          Your next chapter starts with your code.
        </h1>
        <p className="text-[17px] text-muted-foreground text-pretty">
          Sign in with GitHub and we'll turn your contribution history into a
          profile that's yours to shape and share.
        </p>
        <Button size="lg" onClick={socialSignIn}>
          <GithubIcon />
          Continue with Github
        </Button>

        <Separator />

        <div className="flex items-center gap-2.5 text-sm">
          <div className="size-1.5 bg-primary" />

          <div>
            <p>Read-only access</p>
            <p className="text-xs text-muted-foreground">
              We never write to your repositories.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-sm">
          <div className="size-1.5 bg-primary" />

          <div>
            <p>You decide who sees it</p>
            <p className="text-xs text-muted-foreground">
              Switch your profile between public and private anytime.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-sm">
          <div className="size-1.5 bg-primary" />

          <div>
            <p>Leave whenever</p>
            <p className="text-xs text-muted-foreground">
              Disconnecting GitHub removes your synced data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
