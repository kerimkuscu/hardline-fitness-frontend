<template>
  <div class="col-12">
    <div class="row">
      <div class="col-4">
        <div style="margin-top: 270px">
          <form @submit.prevent="submit">
            <div class="form-group row">
              <label for="email" class="col-1"><i class="fas fa-user" /></label>
              <div class="col-10">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control form-control-sm"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                >
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-1"><i class="fas fa-lock" /></label>
              <div class="col-10">
                <input id="password" v-model="form.password" type="password" class="form-control form-control-sm" placeholder="Password">
              </div>
            </div>

            <button :disabled="disabled" type="submit" class="btn btn-primary offset-5">
              <span v-if="disabled">
                <i class="fas fa-spinner fa-pulse" /> Login...
              </span>
              <span v-else>
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
      <div class="col-8">
        <admin-panel-image />
      </div>
    </div>
  </div>
</template>

<script>
    import Form from 'form-backend-validation';
    import AdminPanelImage from './admin-panel-image';

    export default {
        name: 'Login',

        components: {
            AdminPanelImage
        },

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
                    const response = await this.form.post('http://localhost:8000/login');
                    window.toastr.success(this.$i18n.t('entry_successful'));
                    window.eventHub.$emit('user-token', response);
                    window.location.href = '/';
                } catch (error) {
                    if (error.response) {
                        window.toastr.error(error.response.data.error);
                    }
                } finally {
                    this.disabled = false;
                }
            }
        }
    }
</script>