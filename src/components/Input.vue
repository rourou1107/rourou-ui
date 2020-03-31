<template>
    <div class="wrapper">
        <input :value="value" :disabled="disabled" :readonly="readonly"
               type="text"
               :class="{error: error}"
               @change="$emit('change')"
               @input="$emit('input')"
               @focus="$emit('focus')"
               @blur="$emit('blur')"
        >
        <template v-if="error">
            <icon name="error" class="input-icon"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from "./Icon"

    export default {
        name: 'GInput',
        components: {
            Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-color-disabled: #bbb;
    $border-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    $font-size: 14px;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > input {
            height: $height;
            padding: 0 8px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;

            &:hover {
                border: 1px solid $border-color-hover;
            }

            &:focus {
                outline: none;
                box-shadow: inset 0 0 1px 1px $box-shadow-color;
            }

            &[disabled], &[readonly] {
                border-color: $border-color-disabled;
                color: #666;
                cursor: not-allowed;
            }

            &.error {
                border-color: $red;

                &:focus {
                    outline: none;
                    box-shadow: inset 0 0 1px 1px $red;
                }
            }
        }

        > .input-icon {
            fill: $red;
        }

        > .error-message {
            color: $red;
        }

        & > :not(last-child) {
            margin-right: .2em;
        }
    }
</style>
