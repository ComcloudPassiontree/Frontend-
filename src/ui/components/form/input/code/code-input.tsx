import { memo } from 'react'
import VerificationInput from 'react-verification-input'

interface Props {
    disabled?:boolean
}

function Code(props: Props) {
    const {disabled} = props

    return (
        <VerificationInput
          onChange={(value: string) => console.log(value)}
          classNames={{
            container: "mt-6 mb-5 w-full h-[46px]",
            character:
              "border-black bg-bg rounded-md text-[14px] font-[600] leading-[42px]",
            characterInactive: "border-black",
            characterFilled: "border-green-100 border-2",
          }}
        />
    )
}

export default memo(Code)
