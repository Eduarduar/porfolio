import Tippy from '@/components/Base/Tippy'
import Lucide from '@/components/Base/Lucide'
import Button from '@/components/Base/Button'
import { userInfo } from '@/stores/userInfo'

function Email() {
  return (
    <>
      <section className="w-full py-5">
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
            value={userInfo.email}
            readOnly
          />
          <div className="flex gap-2">
            <Tippy content="Send Email">
              <Button
                as={'a'}
                elevated
                variant="soft-success"
                href={`mailto:${userInfo.email}`}
                className="flex py-2.5 px-4 rounded-lg dark:text-slate-200"
              >
                <Lucide icon="Send"></Lucide>
              </Button>
            </Tippy>
            <Tippy content="Copy Email">
              <Button
                elevated
                variant="soft-primary"
                className="flex py-2.5 px-4 rounded-lg dark:text-slate-200"
                onClick={() => navigator.clipboard.writeText(userInfo.email)}
              >
                <Lucide icon="Copy"></Lucide>
              </Button>
            </Tippy>
          </div>
        </div>
      </section>
    </>
  )
}

export default Email
