export default {
  name: 'XxDescriptionsRow',
  props: {
    row: {
      type: Array
    }
  },
  inject: ['xxDescriptions'],
  render(h) {
    const { xxDescriptions } = this
    const row = (this.row || []).map(item => {
      return {
        ...item,
        label: item.slots.label || item.props.label,
        ...['labelClassName', 'contentClassName', 'labelStyle', 'contentStyle'].reduce((res, key) => {
          res[key] = item.props[key] || xxDescriptions[key]
          return res
        }, {})
      }
    })
    if (xxDescriptions.direction === 'vertical') {
      return (
        <tbody>
          <tr class="xx-descriptions-row">
            {
              row.map(item => {
                return (
                  <th
                    class={{
                      'xx-descriptions-item__cell': true,
                      'xx-descriptions-item__label': true,
                      'has-colon': xxDescriptions.border ? false : xxDescriptions.colon,
                      'is-bordered-label': xxDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan={item.props.span}
                  >{item.label}</th>
                )
              })
            }
          </tr>
          <tr class="xx-descriptions-row">
            {
              row.map(item => {
                return (
                  <td
                    class={['xx-descriptions-item__cell', 'xx-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span}
                  >{item.slots.default}</td>
                )
              })
            }
          </tr>
        </tbody>
      )
    }
    if (xxDescriptions.border) {
      return (
        <tbody>
          <tr class="xx-descriptions-row">
            {
              row.map(item => {
                return ([
                  <th
                    class={{
                      'xx-descriptions-item__cell': true,
                      'xx-descriptions-item__label': true,
                      'is-bordered-label': xxDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan="1"
                  >{item.label}</th>,
                  <td
                    class={['xx-descriptions-item__cell', 'xx-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span * 2 - 1}
                  >{item.slots.default}</td>
                ])
              })
            }
          </tr>
        </tbody>
      )
    }
    return (
      <tbody>
        <tr class="xx-descriptions-row">
          {
            row.map(item => {
              return (
                <td class="xx-descriptions-item xx-descriptions-item__cell" colSpan={item.props.span}>
                  <div class="xx-descriptions-item__container">
                    <span
                      class={{
                        'xx-descriptions-item__label': true,
                        'has-colon': xxDescriptions.colon,
                        [item.labelClassName]: true
                      }}
                      style={item.labelStyle}
                    >{item.label}</span>
                    <span
                      class={['xx-descriptions-item__content', item.contentClassName]}
                      style={item.contentStyle}
                    >{item.slots.default}</span>
                  </div>
                </td>)
            })
          }
        </tr>
      </tbody>
    )
  }
}
