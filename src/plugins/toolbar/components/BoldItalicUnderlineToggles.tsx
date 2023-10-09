import React from 'react'
import { corePluginHooks } from '../../core'
import { IS_BOLD, IS_ITALIC, IS_UNDERLINE } from '../../../FormatConstants'
import { MultipleChoiceToggleGroup } from '.././primitives/toolbar'
import BoldIcon from '../../../icons/format_bold.svg'
import ItalicIcon from '../../../icons/format_italic.svg'
import UnderlinedIcon from '../../../icons/format_underlined.svg'

/**
 * A toolbar component that lets the user toggle bold, italic and underline formatting.
 */
export const BoldItalicUnderlineToggles: React.FC = () => {
  const [currentFormat] = corePluginHooks.useEmitterValues('currentFormat')
  const applyFormat = corePluginHooks.usePublisher('applyFormat')

  const boldIsOn = (currentFormat & IS_BOLD) !== 0
  const italicIsOn = (currentFormat & IS_ITALIC) !== 0
  const underlineIsOn = (currentFormat & IS_UNDERLINE) !== 0

  const boldTitle = boldIsOn ? 'Bỏ chữ đậm' : 'Chữ đậm'
  const italicTitle = italicIsOn ? 'Bỏ chữ nghiêng' : 'Chữ nghiêng'
  const underlineTitle = underlineIsOn ? 'Bỏ chữ gạch chân' : 'Chữ gạch chân'

  return (
    <MultipleChoiceToggleGroup
      items={[
        { title: boldTitle, contents: <BoldIcon />, active: boldIsOn, onChange: applyFormat.bind(null, 'bold') },
        { title: italicTitle, contents: <ItalicIcon />, active: italicIsOn, onChange: applyFormat.bind(null, 'italic') },
        {
          title: underlineTitle,
          contents: <UnderlinedIcon style={{ transform: 'translateY(2px)' }} />,
          active: underlineIsOn,
          onChange: applyFormat.bind(null, 'underline')
        }
      ]}
    />
  )
}
