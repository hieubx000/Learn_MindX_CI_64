class Chat {
    $container
    $btnLogout
    constructor() {
        this.$container = document.createElement("div")
        this.$btnLogout = document.createElement("button")
        this.$btnLogout.addEventListener("click", this.handelLogout);
        this.$btnLogout.innerHTML = "Logout"
    }

    handelLogout = () => {
        firebase.auth().signOut()
    }

    render() {
        this.$container.innerHTML = "chat"
        this.$container.appendChild(this.$btnLogout)
        return this.$container;
    }
}

export { Chat }