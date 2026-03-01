import React from 'react'
import { Button, ButtonText, ButtonIcon } from './ui/button'
import { Image } from 'react-native'

function SigninWithGoogle({ 
  onPress, 
  text = 'Sign in with Google',
  variant = 'outline',
  size = 'lg',
  disabled = false,
  className = ''
}) {
  return (
    <Button 
      variant={variant}
      size={size}
      action="default"
      onPress={onPress}
      disabled={disabled}
      className={className}
    >
      <Image 
        source={require('../assets/google-icon.png')}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}

export default SigninWithGoogle;
