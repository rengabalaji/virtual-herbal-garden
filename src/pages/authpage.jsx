
import React, { useState } from 'react';
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  resetPassword
} from '../firebase/auth';

export default function AuthPage({ onSuccess }) {
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const runAuth = async (action) => {
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const user = await action();

      if (user) {
        onSuccess?.(user);
      }
    } catch (err) {
      const errors = {
        'auth/email-already-in-use':
          'This email already has an account. Please sign in.',
        'auth/invalid-email':
          'Please enter a valid email address.',
        'auth/invalid-credential':
          'Email or password is incorrect.',
        'auth/user-not-found':
          'No account found. Please create an account first.',
        'auth/wrong-password':
          'Incorrect password. Please try again.',
        'auth/weak-password':
          'Please use a stronger password (at least 6 characters).',
        'auth/popup-closed-by-user':
          'Google sign-in was cancelled.',
        'auth/unauthorized-domain':
          'This website domain is not authorized in Firebase.',
        'auth/operation-not-allowed':
          'This sign-in method is not enabled in Firebase.',
        'auth/network-request-failed':
          'Network error. Please check your connection.',
        'auth/too-many-requests':
          'Too many attempts. Please wait and try again.'
      };

      setError(
        errors[err.code] ||
        err.message ||
        'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === 'forgot') {
      return runAuth(async () => {
        await resetPassword(email.trim());
        setMessage('Password reset email sent. Check your inbox.');
        return null;
      });
    }

    if (mode === 'signup') {
      if (!name.trim()) {
        setError('Please enter your full name.');
        return;
      }

      return runAuth(() =>
        signUpWithEmail(name.trim(), email.trim(), password)
      );
    }

    return runAuth(() =>
      signInWithEmail(email.trim(), password, rememberMe)
    );
  };

  const handleGoogle = () => {
    runAuth(() => signInWithGoogle(rememberMe));
  };

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setError('');
    setMessage('');
    setPassword('');
  };

  return (
    <main className="auth-shell">
      <section className="auth-visual">
        <div className="auth-brand">
          <span className="auth-brand-icon">
            <Leaf size={23} />
          </span>
          <span>Virtual Herbal Garden</span>
        </div>

        <div className="auth-visual-content">
          <span className="auth-eyebrow">GROW YOUR KNOWLEDGE</span>

          <h1>
            Nature has a story.
            <br />
            <em>Discover yours.</em>
          </h1>

          <p>
            Explore medicinal plants, discover their healing traditions,
            and grow your botanical knowledge.
          </p>

          <div className="auth-feature">
            <span>✳</span>
            <div>
              <strong>Explore botanical wisdom</strong>
              <small>Learn about herbs and their traditional uses.</small>
            </div>
          </div>

          <div className="auth-feature">
            <span>✳</span>
            <div>
              <strong>Make learning your own</strong>
              <small>Keep your learning journey connected to you.</small>
            </div>
          </div>
        </div>

        <p className="auth-quote">
          “The earth has music for those who listen.”
        </p>
      </section>

      <section className="auth-form-panel">
        <div className="auth-mobile-brand">
          <Leaf size={22} /> Virtual Herbal Garden
        </div>

        <div className="auth-form-wrap">
          <div className="auth-heading">
            <span className="auth-kicker">
              {mode === 'signup'
                ? 'BEGIN YOUR JOURNEY'
                : mode === 'forgot'
                  ? 'ACCOUNT RECOVERY'
                  : 'WELCOME BACK'}
            </span>

            <h2>
              {mode === 'signup'
                ? 'Create your account'
                : mode === 'forgot'
                  ? 'Reset your password'
                  : 'Sign in to your garden'}
            </h2>

            <p>
              {mode === 'signup'
                ? 'Create an account to make this space your own.'
                : mode === 'forgot'
                  ? 'We’ll send you a link to reset your password.'
                  : 'Your botanical journey is waiting for you.'}
            </p>
          </div>

          {mode !== 'forgot' && (
            <>
              <div className="auth-tabs">
                <button
                  type="button"
                  className={mode === 'signin' ? 'active' : ''}
                  onClick={() => changeMode('signin')}
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className={mode === 'signup' ? 'active' : ''}
                  onClick={() => changeMode('signup')}
                >
                  Create account
                </button>
              </div>

              <button
                type="button"
                className="auth-google"
                onClick={handleGoogle}
                disabled={loading}
              >
                <span className="auth-google-g">G</span>
                Continue with Google
              </button>

              <div className="auth-divider">
                <span>or continue with email</span>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <label className="auth-field">
                <span>Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
            )}

            <label className="auth-field">
              <span>Email address</span>
              <div className="auth-input-wrap">
                <Mail size={18} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </label>

            {mode !== 'forgot' && (
              <label className="auth-field">
                <span>Password</span>

                <div className="auth-input-wrap">
                  <Lock size={18} />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    minLength={6}
                    autoComplete={
                      mode === 'signup'
                        ? 'new-password'
                        : 'current-password'
                    }
                    required
                  />

                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword
                      ? <EyeOff size={18} />
                      : <Eye size={18} />}
                  </button>
                </div>
              </label>
            )}

            {mode === 'signin' && (
              <div className="auth-options">
                <label className="auth-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="auth-text-button"
                  onClick={() => changeMode('forgot')}
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <p className="auth-error" role="alert">
                {error}
              </p>
            )}

            {message && (
              <p className="auth-success" role="status">
                {message}
              </p>
            )}

            <button
              className="auth-submit"
              type="submit"
              disabled={loading}
            >
              {loading
                ? 'Please wait…'
                : mode === 'signup'
                  ? 'Create account'
                  : mode === 'forgot'
                    ? 'Send reset link'
                    : 'Sign in'}

              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          {mode === 'forgot' && (
            <button
              type="button"
              className="auth-text-button auth-back-to-login"
              onClick={() => changeMode('signin')}
            >
              ← Back to sign in
            </button>
          )}

          {mode !== 'forgot' && (
            <p className="auth-switch">
              {mode === 'signup'
                ? 'Already have an account?'
                : 'New to the garden?'}{' '}

              <button
                type="button"
                onClick={() =>
                  changeMode(mode === 'signup' ? 'signin' : 'signup')
                }
              >
                {mode === 'signup' ? 'Sign in' : 'Create an account'}
              </button>
            </p>
          )}

          <p className="auth-legal">
            By continuing, you agree to use this learning platform responsibly.
          </p>
        </div>
      </section>
    </main>
  );
}
