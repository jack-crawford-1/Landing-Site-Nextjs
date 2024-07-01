import Tooltip from '../utils/Tooltip'

function Email() {
  return (
    <Tooltip className="text-sm" text="get in touch">
      <a href="mailto:hello@jackcrawford.co.nz" target="_blank">
        <button>hello@jackcrawford.co.nz</button>
      </a>
    </Tooltip>
  )
}

export default Email
