export const singup = `<form class="form">
            <label for="login" class="form__label">login</label>
            <input type="text" class="form__input" id="login" placeholder="enter login" name="login" required>
            <label for="password" class="form__label">password</label>
            <input type="password" class="form__input" id="password" placeholder="enter password" name="password" required>
            <label for="passwordConfirm" class="form__label">confirm password</label>
            <input type="password" class="form__input" id="passwordConfirm" placeholder="confirm password" name="passwordConfirm" required>
            <button class="form__btn" type="submit" id="registr-btn">registration</button>
            <p class="form__info">you have acount?<a href="/" id="singin" class="form__link">login</a></p>
            <p class="form__msg hide"></p>
        </form>`;