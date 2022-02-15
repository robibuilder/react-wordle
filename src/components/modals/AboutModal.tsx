import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is the open source version of the word guessing game we all know and
        love - customized by {' '}
        <a
          href="http://jacobrobinett.com"
          className="underline font-bold"
        >
          Jacob Robinett
        </a>{' '}
      </p>
    </BaseModal>
  )
}
