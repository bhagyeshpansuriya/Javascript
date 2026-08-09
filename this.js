const user = {
    name: "Bhagyesh",

    show: function () {
        const test = () => {
            console.log(this.name);
        };

        test();
    }
};

user.show();