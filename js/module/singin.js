    export const singin = `<form class="form">
        <label for="login" class="form__label">login</label>
        <input type="text" class="form__input" id="login" placeholder="enter login" name="login" required>
            <label for="password" class="form__label">password</label>
            <input type="password" class="form__input" id="password" placeholder="enter password" name="password" required>
                <button class="form__btn" type="submit" id="login-btn">login</button>
                <p class="form__info">you didn't have acount?<a href="/" id="register" class="form__link">registration</a></p>
                <p class="form__msg hide"></p>
            </form>`