const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

module.exports = {
  navBarContainer: {
    backgroundColor: 'white',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center',
  },
  navBarButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
  },
};
