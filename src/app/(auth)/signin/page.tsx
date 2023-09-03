import Link from 'next/link'
import Image from 'next/image'
import OnlyLogo from '@/images/logos/only-logo.svg'
import GoogleLogo from '@/images/logos/google.svg'

export const metadata = {
  title: 'sign in',
  description: 'sign in page',
}

export default function SigninPage() {
  return (
    <>
      <div className="w-200 text-center">
        <Image
          src={OnlyLogo}
          width={100}
          height={100}
          alt="Hankyoreh logo"
          className="m-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Sign in
        </h2>
        <form className="space-y-6" action="#" method="POST">
          <div className={'my-10'}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-[3.2rem] text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Image
                src={GoogleLogo}
                width={50}
                height={50}
                alt="Hankyoreh logo"
                className="mr-5"
              />
              Google 로그인
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
