<template>
  <div class="col-12">
    <div class="row">
      <div class="col-6">
        <div style="margin-top: 270px">
          <form @submit.prevent="submit">
            <div class="form-group row">
              <label for="email" class="col-1"><i class="fas fa-user" /></label>
              <div class="col-10">
                <input id="email" type="email" class="form-control form-control-sm" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-1"><i class="fas fa-lock" /></label>
              <div class="col-10">
                <input id="password" type="password" class="form-control form-control-sm">
              </div>
            </div>

            <button :disabled="disabled" type="submit" class="btn btn-primary offset-5">
              Login
            </button>
          </form>
        </div>
      </div>
      <div class="col-6">
        <img style="height: 619px; width: 625px" src="../../assets/hulk.jpg" alt="login">
      </div>
    </div>
  </div>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        name: 'Login',

        data: () => ({
            form: new Form({
                email: null,
                password: null,
            }),

            disabled: false,
        }),
        
        methods: {
            async submit() {
              this.disabled = true;

                try {
                  const response = await this.form.post('');
                  window.toastr.success(response.status);
                } catch (error) {
                  if (error.response.status !== 422) {
                    window.toastr.error(error.response.status);
                  }
                }finally {
                  this.disabled = false;
                }
            }
        }
    }
</script>