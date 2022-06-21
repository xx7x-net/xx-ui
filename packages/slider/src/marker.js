export default {
  name: 'XxMarker',

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    const label = typeof this.mark === 'string' ? this.mark : this.mark.label

    return (
      <div class="xx-slider__marks-text" style={ this.mark.style || {} }>
        { label }
      </div>
    )
  }
}
