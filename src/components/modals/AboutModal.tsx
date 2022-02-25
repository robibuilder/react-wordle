import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Jacob's version of an open source Wordle Clone - {' '}
        <a
          href="http://jacobrobinett.com"
          className="underline font-bold"
        >
          Jacob Robinett
        </a>{' '}
        {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
        Orignal Repo
        </a>{' '}
      </p>
    </BaseModal>
  )
}
